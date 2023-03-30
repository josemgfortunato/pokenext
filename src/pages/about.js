import Image from "next/image";

export default function About() {
  return (
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-4">Sobre o Projeto</h1>
        <p className="mb-8 max-w-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio animi
          quo beatae saepe quae incidunt fuga modi itaque voluptas molestias
          autem asperiores sed, nisi, quaerat explicabo exercitationem, deserunt
          nesciunt non?
        </p>
        <Image
          src="/images/charizard.png"
          width="300"
          height="300"
          alt="Charizard"
        />
      </div>
  );
}
