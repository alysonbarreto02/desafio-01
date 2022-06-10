import ItemActivities from "./ItemActivities";

export default function Activities() {
    let activities = [{
        user: 'Israel Sales',
        type: "error",
        text: "Em alguns clubes, é verdade, fiz um acordo que me permitia ir pra noite. Mas eu nunca faltava em treino. Quero deixar isso bem claro.",
        time: "alguma coisa",
    },
    {
        user: 'André Correa',
        type: "normal",
        text: "Quando voltei a jogar no Brasil, disse a todos os presidentes: “Olha, tenho dificuldade para acordar cedo,",
        time: "alguma coisa",
    },
    {
        user: 'Alyson Barreto',
        type: "error",
        text: "então vou treinar à tarde”. Eles nem precisaram escrever nada no papel. Cara, falavam",
        time: "alguma coisa",
    },
    {
        user: 'Eva Angélica',
        type: "warning",
        text: "“Ah, Romário não dorme...” Dorme! Ele só acorda mais tarde. “Romário não treina...” Treina! Mas não às 9h da manhã.",
        time: "alguma coisa",
    },
    {
        user: 'Eva Angélica',
        type: "error",
        text: "Se tinha jogo domingo, eu saía na sexta-feira. Tá, pode ser que tenha acontecido algumas vezes, mas foi uma em dez, no máximo. E, olha, eu nunca fumei. Graças a Deus,",
        time: "alguma coisa",
    }]
    return (
        <div className="flex-col w-4/12 h-96 mr-6">
            <div>
                <p className="ml-6 flex font-semibold text-2xl my-3 whitespace-nowrap">Activities</p>
            </div>
            <div className="w-full">
                <div className="flex-col justify-end bg-white  rounded-lg">
                    {activities.map((activity, index) => <ItemActivities activity={activity} key={index} />)}
                </div>
            </div>
        </div>
    )
}


