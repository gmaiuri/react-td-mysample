function AffichageBoucle() {
    const tableau = ["bananes", "pommes", "oranges", "poires"];
    return (
        <div>
            <p>
            {tableau.map(fruit => (
                <span>Je vous propose le fruit suivant : {fruit}<br /></span>
            ))}
            </p>
        </div>
    );
}

export default AffichageBoucle;
