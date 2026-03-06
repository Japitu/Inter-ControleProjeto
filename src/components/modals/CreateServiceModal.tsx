import { useState } from "react";
import type { ProjectProps, UserProps } from "../../types";
import { createService } from "../../services/servicoAPI";
import type { Area, Status, ServiceProps } from "../../types";

type Props = {
    usuarios: UserProps[];
    projetos: ProjectProps[];
    onClose: () => void;
    onCreated: (newService: ServiceProps) => void;
};


const CreateServiceModal = ({ usuarios, projetos, onClose, onCreated }: Props) => {

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        nome: "",
        numero: "",
        area: "",
        statusServico: "",
        projeto: "",
        usuario: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);

            const newService = {
                nome: form.nome,
                numero: form.numero,
                area: form.area as Area,
                statusServico: form.statusServico as Status,
                projeto: { id: Number(form.projeto) },
                usuario: { id: Number(form.usuario) }
            };
            
            const createdService = await createService(newService);

            console.log(createdService);

            onCreated(createdService);
            onClose();

        } catch (error) {
        console.error("Erro ao criar serviço:", error);
        } finally {
        setLoading(false);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };
    

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center"
        onClick={onClose}
        >
            <div 
                className="bg-white rounded-lg shadow-lg p-6 w-96"
                onClick={(e) => e.stopPropagation()}
            >

                <h2 className="text-lg font-bold mb-4">
                    Novo Serviço
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                    <label htmlFor="nome" className="text-sm font-medium">
                        Nome do Serviço
                    </label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Nome do serviço"
                        value={form.nome}
                        onChange={handleChange}
                        className="border rounded p-2"
                    />

                    <label htmlFor="numero" className="text-sm font-medium">
                        Número do Serviço
                    </label>
                    <input
                        id="numero"
                        type="text"
                        placeholder="Número do serviço"
                        value={form.numero}
                        onChange={handleChange}
                        className="border rounded p-2"
                    />

                    <label htmlFor="area" className="text-sm font-medium">
                        Área
                    </label>
                    <select
                        id="area"
                        value={form.area}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    >
                        <option value="" disabled hidden>
                            Selecione a área
                        </option>
                        <option value="PARQUE">Parque</option>
                        <option value="CAMPO">Campo</option>
                        <option value="ENGENHARIA">Engenharia</option>
                    </select>

                    <label htmlFor="statusServico" className="text-sm font-medium">
                        Status do Serviço
                    </label>
                    <select
                        id="statusServico"
                        value={form.statusServico}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    >
                        <option value="" disabled hidden>
                            Selecione o status
                        </option>
                        <option value="AGUARDANDO">Aguardando</option>
                        <option value="ATIVO">Ativo</option>
                        <option value="CONCLUIDO">Concluído</option>
                    </select>

                    <label htmlFor="usuario" className="text-sm font-medium">
                        Responsável
                    </label>
                    <select
                        id="usuario"
                        value={form.usuario}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    >
                        <option value="" disabled hidden>
                            Selecione o Responsável
                        </option>
                        {usuarios.map((usuario) => (
                            <option key={usuario.id} value={usuario.id}>
                                {usuario.nome}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="projeto" className="text-sm font-medium">
                        Projeto
                    </label>
                    <select
                        id="projeto"
                        value={form.projeto}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    >
                        <option value="" disabled hidden>
                            Selecione o Projeto
                        </option>
                        {projetos.map((projeto) => (
                            <option key={projeto.id} value={projeto.id}>
                                {projeto.nome}
                            </option>
                        ))}
                    </select>

                    <div className="flex justify-end gap-2 mt-3">

                        <button
                            type="submit"
                            disabled={loading}
                            className="px-3 py-1 bg-blue-600 text-white rounded cursor-pointer"
                        >
                            {loading ? "Criando..." : "Criar"}
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-3 py-1 bg-gray-200 rounded cursor-pointer"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateServiceModal;