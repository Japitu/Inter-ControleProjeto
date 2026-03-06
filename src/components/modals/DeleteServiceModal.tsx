type Props = {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const DeleteServiceModal = ({ isOpen, onConfirm, onCancel }: Props) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        onClick={onCancel}>
      <div 
      className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6"
      onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">
            Confirmar exclusão
        </h2>

        <p className="text-gray-600 mb-6">Deseja realmente deletar este serviço?</p>

            <div className="flex justify-center gap-4">
                <button 
                type="button"
                onClick={onConfirm}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition cursor-pointer"
                >
                    Sim
                </button>

                <button 
                type="button"
                onClick={onCancel}
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition cursor-pointer"
                >
                    Cancelar
                </button>
            </div>
        </div>
    </div>
  );
}

export default DeleteServiceModal;