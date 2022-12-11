function Personne({data}) {
    return (
        <div>
            {data.map(person => (
                <p>
                    <b>{person.actor}</b> joue : <i>{person.role}</i>
                </p>
            ))}
        </div>
    );
}

export default Personne;
