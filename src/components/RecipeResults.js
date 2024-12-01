import { Link } from 'react-router-dom';
const RecipeResults = ({ recipes }) => {

    return (
        recipes && (<div className="recipe-container">
            {recipes.map((item) => (
                <div key={item.id} className="recipe-card">
                    <Link to={`/recipe/${item.id}`}>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} />
                    </Link>
                </div>
            ))}
        </div>)
    )

}
export default RecipeResults;