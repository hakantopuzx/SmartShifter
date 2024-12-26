import { Check, AlertCircle } from 'lucide-react';

type CardProps = {
    status: "success" | "error";
    text: string;
};

export default function InfoText(props: CardProps) {
    return (
        <div className={`info-text flex items-center gap-2 bg-[#E7FAE8] rounded-lg px-3 py-2 w-full ${props.status == 'success' ? 'bg-[#E8F5E9]' : 'bg-[#FFE4E8]'}`}>
            <div className="status">
                {props.status == 'success' ?
                    <Check size={20} color='#039855' />
                    :
                    <AlertCircle size={20} color='#F23700' />
                }
            </div>
            <div className={`text-sm font-semibold color-[#039855] ${props.status == 'success' ? 'text-[#039855]' : 'text-[#F23700]'}`}>
                {props.text}
            </div>
        </div>
    );
}
