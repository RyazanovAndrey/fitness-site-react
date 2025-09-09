import type { IList } from "@/types/type"
import Button from "./Button"

const BenefitsCard = ({ icon, title, desc }: IList) => {
    return (
        <div className="border border-accent/10 rounded-md flex flex-col items-center gap-5 p-5">
            <div className="size-18 p-5 rounded-full bg-red-200 flex items-center justify-center">{icon}</div>
            <p className="text-2xl font-semibold">{title}</p>
            <p className="text-center">{desc}</p>
            <Button variant="link" >Learn more...</Button>
        </div>
    )
}

export default BenefitsCard