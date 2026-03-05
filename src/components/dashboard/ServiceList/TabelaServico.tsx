import { useEffect, useState } from "react";
import type { ServiceProps } from "../../../types";
import { getServices } from "../../../services/servicoAPI";
import CreateServiceModal from "../../modals/CreateServiceModal/CreateServiceModal";

const ServiceList = () => {   

    const [showCreateServiceModal, setShowCreateServiceModal] = useState(false);

    const [services, setServices] = useState<ServiceProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchServices() {
            try {
                const data = await getServices();
                setServices(data);
            } catch (error) {
                console.error("Erro ao buscar serviços:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchServices()
    }, []);
    

    return (
    <div className="w-full h-full bg-white rounded-lg shadow-md">
        <div className="flex flex-row justify-between m-6">
            <h1 className="font-bold text-xl">Serviços</h1>

            {/* Depois colocar JS para procurar, filtrar, ordenar e paginar os serviços */}
            {/* Colocar botão de funcionalidade ou aqui, ou em outra div */}

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm cursor-pointer" onClick={() => setShowCreateServiceModal(true)}>
                + Add Serviços
            </button>
        </div>
        <div>

            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Projeto</th>
                        <th className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Serviço</th>
                        <th className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Horas Gastas</th>
                        <th className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Área</th>
                        <th className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Ações</th>
                    </tr>
                </thead>
                
                <tbody>

                    { loading ? (
                        <tr>
                            <td colSpan={6} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                Carregando...
                            </td>
                        </tr>
                     ) : (
                    services.map((service: ServiceProps) => (
                        <tr key={service.id} className="hover:bg-blue-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{service.numero} - {service.projeto.nome}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{service.nome}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{service.statusServico}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{service.horasTotal ? `${service.horasTotal}h` : '0h'}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{service.area}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">

                                {/* Adicionar Atividade */}
                                <button className="text-gray-600 hover:text-blue-700 transition-colors mr-4 cursor-pointer" /*onClick={() => handleAddHoursClick(service)}>*/>
                                Adicionar Horas
                                </button>

                                {/* Editar */}
                                <button className="text-gray-400 hover:text-blue-700 transition-colors mr-4 cursor-pointer" /*onClick={() => handleEditClick(service)}>*/>
                                Editar
                                </button>

                                {/* Remover */}
                                <button className="text-red-500 hover:text-red-700 transition-colors font-medium cursor-pointer" /*onClick={() => handleRemoveClick(service)}*/>
                                Remover
                                </button>
                            </td>
                        </tr>
                    )))}
                    
                </tbody>
            </table>
        </div>
        {showCreateServiceModal && (
            <CreateServiceModal onClose={() => setShowCreateServiceModal(false)} />
            )
        }

    </div>
    );
}

export default ServiceList;
