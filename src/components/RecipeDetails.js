import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const RecipeDetails = ({ }) => {
    const params = useParams();
    const id = params.id;
    const [recipeDetails, setRecipeDetails] = useState(null);

    useEffect(() => {
        const fetchRecipeDetails = async () => {

            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=efe593a744b44df3a0475ca738029caf`);
            const responseJson = await response.json();
            setRecipeDetails(responseJson);

        };
        fetchRecipeDetails();
    }, [id]);

    return (
        recipeDetails && (
            <div className="recipe-details">
                <h1>{recipeDetails.title}</h1>
                <img src={recipeDetails.image} alt={recipeDetails.title} />
                <div dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></div>
                <h2>Ingredients</h2>
                <ul>
                    {recipeDetails.extendedIngredients.map((item) => (
                        <li key={item.id}>{item.original}</li>
                    ))}
                </ul>
                <h2>Instructions</h2>
                <ol>
                    {recipeDetails.analyzedInstructions[0].steps.map((item) => (
                        <li key={item.number}>{item.step}</li>
                    ))}
                </ol>

            </div>
        )
    );

}

export default RecipeDetails;