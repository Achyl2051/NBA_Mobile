// src/components/MyList.tsx
import React, { useState, useEffect } from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonRouterLink } from '@ionic/react';
import axios from 'axios';


const Liste: React.FC = () => {
  const [teams, setTeams] = useState([]);

  // useEffect(() => {
  //   // Aucun appel API nécessaire car les données sont déjà incluses
  // }, []);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('https://nbaws-production.up.railway.app/teams');
        setTeams(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des équipes', error);
      }
    };

    fetchTeams();
  }, []);


  return (
    <IonContent>
      <IonList>
        {teams.map((team, index) => (
            <IonRouterLink routerLink={`/players/${team.id}`}>

          <IonItem key={index} button>
            {/* Utilisation d'IonRouterLink pour créer un lien vers la page d'équipe avec le nom de l'équipe dans la route */}
              <IonLabel>{team.nom} - {team.diminutif}</IonLabel>
          </IonItem>
          </IonRouterLink>

        ))}
      </IonList>
    </IonContent>
  );
};

export default Liste;
