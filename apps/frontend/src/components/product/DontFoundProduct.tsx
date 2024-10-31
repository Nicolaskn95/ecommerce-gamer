import Link from "next/link";
import { TbDevicesPcOff } from "react-icons/tb";

export interface DontFoundProductProps {
  noBackButton?: boolean;
}

export default function DontFoundProduct(props: DontFoundProductProps) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center text-violet-300">
      <TbDevicesPcOff size={120} />
      <span className="text-violet-300 font-light">Produto não encontrado</span>
      {!props.noBackButton && (
        <Link
          href="/"
          className="button bg-violet-700 hover:bg-violet-600 text-white mt-5"
        >
          Voltar
        </Link>
      )}
    </div>
  );
}
