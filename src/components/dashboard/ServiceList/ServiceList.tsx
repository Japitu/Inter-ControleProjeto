import type { Service } from "../../../types";

const ServiceList = () => {   

    const services: Service[] = [
        {
            id: 1,
            name: "Rel Causa Raiz",
            projectId: 101,
            projectName: "Casa Blanca",
            projectNumber: "P2024_052",
            area: "Parque",
            status: "Aguardando",
            hoursSpent: "0",
            responsibleUserId: 1,
            responsibleUserName: "João Silva"
        },
        {
            id: 2,
            name: "DR Retroativo",
            projectId: 102,
            projectName: "Luiz Carlos",
            projectNumber: "25_165_25",
            area: "Parque",
            status: "Aguardando",
            hoursSpent: "0"
        },
        {
            id: 3,
            name: "TAF unid 1286090",
            projectId: 103,
            projectName: "Jacarandá",
            projectNumber: "25_160_25",
            area: "Parque",
            status: "Ativo",
            hoursSpent: "1"
        },
        {
            id: 4,
            name: "Análise de Frota",
            projectId: 104,
            projectName: "Guimarania",
            projectNumber: "25_172_27",
            area: "Parque",
            status: "Concluído",
            hoursSpent: "1,5"
        }
    ];

    const loading = false; // Simulando estado de carregamento

    return (
    <div className="w-full h-full bg-white rounded-lg shadow-md">
        <div className="flex flex-row justify-between m-6">
            <h1 className="font-bold text-xl">Serviços</h1>

            {/* Depois colocar JS para procurar, filtrar, ordenar e paginar os serviços */}
            {/* Colocar botão de funcionalidade ou aqui, ou em outra div */}

            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm cursor-pointer">+ Add Serviços</button>
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

                {/* {Colocar aqui o map para listar os serviços recebidos da API} */}
                    { loading ? <span>Carregando...</span> 
                    :
                    services.map((service) => (
                        <tr key={service.id} className="hover:bg-blue-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{service.projectNumber} - {service.projectName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{service.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{service.status}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{service.hoursSpent}h</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{service.area}</td>

                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">

                                {/* Adicionar Horas */}
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
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default ServiceList;
