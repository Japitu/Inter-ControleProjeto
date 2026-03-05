import { useState } from "react";

type Props = {
    onClose: () => void;
};

const CreateServiceModal = ({ onClose }: Props) => {

    const [name, setName] = useState("");
    const [area, setArea] = useState("PARQUE");
    const [status, setStatus] = useState("AGUARDANDO");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newService = {
            nome: name,
            area,
            statusServico: status
        };

        console.log(newService);

        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

            <div className="bg-white rounded-lg shadow-lg p-6 w-96">

                <h2 className="text-lg font-bold mb-4">
                    Novo Serviço
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                    <input
                        type="text"
                        placeholder="Nome do serviço"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded p-2"
                    />

                    <select
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="border rounded p-2"
                    >
                        <option value="PARQUE">Parque</option>
                        <option value="CAMPO">Campo</option>
                        <option value="ENGENHARIA">Engenharia</option>
                    </select>

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="border rounded p-2"
                    >
                        <option value="AGUARDANDO">Aguardando</option>
                        <option value="ATIVO">Ativo</option>
                        <option value="CONCLUIDO">Concluído</option>
                    </select>

                    <div className="flex justify-end gap-2 mt-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-3 py-1 bg-gray-200 rounded"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="px-3 py-1 bg-blue-600 text-white rounded"
                        >
                            Criar
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default CreateServiceModal;