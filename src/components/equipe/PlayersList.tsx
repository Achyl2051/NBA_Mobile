// src/pages/PlayersList.tsx
import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonList, IonItem, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import './equipe.css'
import axios from 'axios';
interface PlayersListProps extends RouteComponentProps<{ idteam: string }> { }

interface Player {
  name: string;
  position: string;
}

const PlayersList: React.FC<PlayersListProps> = ({ match }) => {
  const idteam = match.params.idteam;
  console.log(idteam);
  // Simulez la récupération des joueurs en fonction de l'équipe (remplacez cela par une requête API réelle)
  const [players, setPlayers] = useState([]);

  // useEffect(() => {
  //   // Aucun appel API nécessaire car les données sont déjà incluses
  // }, []);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('https://nbaws-production.up.railway.app/statbyequipes/'+idteam);
        setPlayers(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des équipes', error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <IonPage className='myPage'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/Liste`} />
          </IonButtons>
          <IonTitle>Liste des Joueurs - {idteam}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='myContent'>
        {/* <IonLabel>{player.name} - {player.position}</IonLabel> */}
        < table border={1} className='playerList'>
          <thead>
            <tr>
              <th>Joueur</th>
              <th>M</th>
              <th>MJ</th>
              <th>PPM</th>
              <th>RPM</th>
              <th>PDPM</th>
              <th>LF</th>
              <th>3P</th>
              <th>2P</th>
              <th>EFF</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              // <IonItem key={index}>
              <tr key={index}>
                <td>{player[0]}</td>
                <td>{player[1]}</td>
                <td>{player[2]}</td>
                <td>{player[3]}</td>
                <td>{player[4]}</td>
                <td>{player[5]}</td>
                <td>{player[6]}</td>
                <td>{player[7]}</td>
                <td>{player[8]}</td>
                <td>{player[9]}</td>
                <td>{player[10]}</td>
              </tr>
              // </IonItem>
            ))}

            {/* Ajoutez autant de lignes que nécessaire */}
          </tbody>
        </table>

      </IonContent>
    </IonPage >
  );
};

export default PlayersList;
