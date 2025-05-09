import '../index.css'
import ModifierVisiteur from '../../composants/ficheVisiteur';


function Visiteur() {

    return (
        <>
        <div className="text-gray-500 dark:text-gray-300">
            <br />
            <h1 className='text-center'>Page du visiteur</h1>
        <ModifierVisiteur />
        </div>
        </>
    );
}

export default Visiteur;