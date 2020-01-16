import React, {useEffect, useState} from 'react';

function DevForm({ onSubmit }) {
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                
                setLatitude(latitude);
                setLongitude(longitude);
            },
            err => {},
            { timeout: 30000 }
        )}, []);
    
    async function handleSubmit(e) {
        e.preventDefault();
        
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });
        
        setGithubUsername('');
        setTechs('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input
                    type="text"
                    name="github_username"
                    id="github_username"
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)}
                    required
                />
            </div>
        
            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input
                    type="text"
                    name="techs"
                    id="techs"
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                    required
                />
            </div>
        
            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        type="number"
                        name="latitude"
                        id="latitude"
                        value={latitude}
                        onChange={e => setLatitude(parseFloat(e.target.value))}
                        required
                    />
                </div>
            
                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        value={longitude}
                        onChange={e => setLongitude(parseFloat(e.target.value))}
                        required
                    />
                </div>
            </div>
        
            <button type="submit">Salvar</button>
        </form>
    );
}

export default DevForm;