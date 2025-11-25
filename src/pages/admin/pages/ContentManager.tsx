import React from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { ContentForm } from '../components/ContentForm';
import { Video } from '../../../types';

export function ContentManager() {
  const [isAddingContent, setIsAddingContent] = React.useState(false);
  const [contents, setContents] = React.useState<Video[]>([]);

  const handleAddContent = (data: Partial<Video>) => {
    // TODO: Integrate with backend
    console.log('Adding content:', data);
    setIsAddingContent(false);
  };

  const handleDeleteContent = (id: string) => {
    // TODO: Integrate with backend
    console.log('Deleting content:', id);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Gerenciar Conteúdo</h1>
        <button
          onClick={() => setIsAddingContent(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus className="w-5 h-5" />
          Adicionar Conteúdo
        </button>
      </div>

      {isAddingContent ? (
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Novo Conteúdo</h2>
          <ContentForm onSubmit={handleAddContent} />
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Título
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Categoria
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {contents.map((content) => (
                <tr key={content.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-white">
                    {content.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                    {content.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleDeleteContent(content.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}