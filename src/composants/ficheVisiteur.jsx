import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../api/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

function ModifierVisiteur() {
  const { visiteur } = useContext(AuthContext) || {};
  const [visiteurData, setVisiteurData] = useState({
    id: visiteur?.id || '',
    nom: visiteur?.nom || '',
    prenom: visiteur?.prenom || '',
    adresse: visiteur?.adresse || '',
    cp: visiteur?.cp || '',
    ville: visiteur?.ville || '',
  });
  const [updateVisiteurSucces, setUpdateVisiteurSucces] = useState(null); // gestion derreur

  function updateVisiteur(e) {
    e.preventDefault();
    console.log('Données du visiteur envoyées :', visiteurData);
    sendUpdateVisiteur(visiteurData)
      .then((response) => {
        setUpdateVisiteurSucces(true);
        console.log('Mise à jour réussie', response.data);
      })
      .catch((error) => {
        setUpdateVisiteurSucces(false);
        console.error(
          'Erreur lors de la mise à jour',
          error.response ? error.response.data : error.message
        );
      });
  }

  async function sendUpdateVisiteur(params) {
    const apiUrl = '/majVisiteur';
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await api.put(apiUrl, params, config);
      console.log('Réponse de l\'API :', response);
      return response;
    } catch (error) {
      console.error('Erreur API :', error.response);
      throw error;
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-200 dark:bg-zinc-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-700 dark:text-white text-center">
        Fiche Visiteur
      </h1>
      <form onSubmit={updateVisiteur}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Nom</label>
          <input
            type="text"
            name="nom"
            value={visiteurData.nom}
            onChange={(e) => setVisiteurData({ ...visiteurData, nom: e.target.value })}
            className="w-full p-2 bg-zinc-100 dark:bg-zinc-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Prénom</label>
          <input
            type="text"
            name="prenom"
            value={visiteurData.prenom}
            onChange={(e) => setVisiteurData({ ...visiteurData, prenom: e.target.value })}
            className="w-full p-2 bg-zinc-100 dark:bg-zinc-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Adresse</label>
          <input
            type="text"
            name="adresse"
            value={visiteurData.adresse}
            onChange={(e) => setVisiteurData({ ...visiteurData, adresse: e.target.value })}
            className="w-full p-2 bg-zinc-100 dark:bg-zinc-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Code Postal</label>
          <input
            type="text"
            name="cp"
            value={visiteurData.cp}
            onChange={(e) => setVisiteurData({ ...visiteurData, cp: e.target.value })}
            className="w-full p-2 bg-zinc-100 dark:bg-zinc-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Ville</label>
          <input
            type="text"
            name="ville"
            value={visiteurData.ville}
            onChange={(e) => setVisiteurData({ ...visiteurData, ville: e.target.value })}
            className="w-full p-2 bg-zinc-100 dark:bg-zinc-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transform hover:scale-105 transition-transform duration-200"
        >
          <FontAwesomeIcon icon={faFloppyDisk} style={{ marginRight: '9px' }} />
          Enregistrer
        </button>
        {updateVisiteurSucces === true && (
          <p className="mt-4 alert-success">Mise à jour réussie !</p>
        )}
        {updateVisiteurSucces === false && (
          <p className="mt-4 text-error">Erreur lors de la mise à jour.</p>
        )}
      </form>
    </div>
  );
}

export default ModifierVisiteur;