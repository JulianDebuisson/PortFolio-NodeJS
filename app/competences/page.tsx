import data from '@/private/database.json'
import card from "@/app/competences/card";


export interface Competence{
    id: number,
    name: string,
    image: string,
    principale: boolean,
}

export default function Page() {
    let competences:Competence[] = data.competences
    let principale:Competence[] = competences.filter(competence => competence.principale)
    let secondaire:Competence[] = competences.filter(competence => !competence.principale)
    return (

        <div className={"mt-6 ml-2"}>
            <p>Compétence(s) principale(s) :</p>
            <div className={"grid grid-cols-none justify-start p-6 gap-4"}>
                {principale.map((principale) => (card(principale)))}
            </div>

            <p>Compétence(s) vue lors de mon BUT :</p>
            <div className={"grid grid-cols-4 justify-start  p-6 "}>
                {secondaire.map((secondaire) => (card(secondaire)))}
            </div>
        </div>
    )
}