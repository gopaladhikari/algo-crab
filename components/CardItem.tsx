import { CardItemPropsType } from "@/types";
import Image from "next/image";

function CardItem({ src, title, paragraph }: CardItemPropsType) {
  return (
    <>
      <div className="max-w-sm rounded-lg dark:border-gray-700 flex flex-col gap-4 px-4 py-6">
        <Image
          src={src}
          width={130}
          height={85}
          alt="dignity-img "
          className="w-[130px] h-[85px] object-cover"
        />
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {paragraph}
        </p>
      </div>
    </>
  );
}

export default CardItem;
