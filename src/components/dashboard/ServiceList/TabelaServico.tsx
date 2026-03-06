import { useEffect, useState } from "react";
import type { ServiceProps, UserProps } from "../../../types";
import { getServices, deleteService } from "../../../services/servicoAPI";
import { getUsers } from "../../../services/userAPI";
import { getProjects } from "../../../services/projectsAPI";
import CreateServiceModal from "../../modals/CreateServiceModal/CreateServiceModal";
import DeleteServiceModal from "../../modals/DeleteConfirmModal/DeleteServiceModal";


const ServiceList = () => {

    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const [showCreateServiceModal, setShowCreateServiceModal] = useState(false);

    const [services, setServices] = useState<ServiceProps[]>([]);
    const [loading, setLoading] = useState(true);

    const [users, setUsers] = useState<UserProps[]>([]);
    const [projects, setProjects] = useState([]);

    const [deleteId, setDeleteId] = useState<number | null>(null);

    const handleServiceCreated = (newService: ServiceProps) => {
        setServices(prevServices => [...prevServices, newService]);
    }

    // UseEffect para as buscas

    // UseEffect dos serviços ao montar o componente
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

    // UseEffect dos usuários ao montar o componente

    useEffect(() => {
    async function fetchUsers() {
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    }

    fetchUsers();
}, []);

    // UseEffect para buscar os projetos ao montar o componente

    useEffect(() => {
        async function fetchProjects() {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error("Erro ao buscar projetos:", error);
            }
        }

        fetchProjects();
    }, []);


    const confirmDelete = async () => {

    if (deleteId === null) return;

    await deleteService(deleteId);

    setServices(prev =>
        prev.filter(service => service.id !== deleteId)
    );

    setDeleteId(null);
    };

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
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{capitalizeFirstLetter(service.statusServico)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{service.horasTotal ? `${service.horasTotal}h` : '0h'}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">({capitalizeFirstLetter(service.area)})</td>
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
                                <button className="text-red-500 hover:text-red-700 transition-colors font-medium cursor-pointer" onClick={() => setDeleteId(service.id)}>
                                Remover
                                </button>
                            </td>
                        </tr>
                    )))}
                    
                </tbody>
            </table>
        </div>
        {showCreateServiceModal && (
            <CreateServiceModal 
            usuarios={users} 
            projetos={projects} 
            onClose={() => setShowCreateServiceModal(false)} 
            onCreated={handleServiceCreated}
            />
            )
        }
        <DeleteServiceModal 
        isOpen={deleteId !== null} 
        onConfirm={confirmDelete} 
        onCancel={() => {
            setDeleteId(null);
        }} />

    </div>
    );
}

export default ServiceList;
