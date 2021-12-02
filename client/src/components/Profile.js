import React , { useEffect, useState }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import JoinTeam from './JoinTeam';
import CreateTeam from './CreateTeam';
import TemplateCard from './TemplateCard';
import { fetchUser } from '../state/actionCreators';
import '../styles/Profile.css'

const Profile = () => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [teams, setTeams] = useState([]);
  const [templates, setTemplates] = useState([]);

  const getTeams = async token => {
    const response = await fetch('/db/teams', {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` }});
    const teamData = await response.json();
    setTeams(teamData)
  }

  const getTemplates = async token => {
    const response = await fetch('/db/templates', {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` }});
    const templatesData = await response.json();
    setTemplates(templatesData)
  }

  const logOut = () => {
    localStorage.removeItem('retroToken')
    navigate('/login')
  }

  useEffect(() => {
    const token = localStorage.getItem('retroToken');
    if(!token) {
      navigate('/login')
      return;
    } else if (!user.user) {
      dispatch(fetchUser(token))
    } 
    getTeams(token);
    getTemplates(token);
  }, [user]);

  const chosenFormData = templates?.find(item => item.name === user.user?.templates[0]);

  return (
    <div className="Profile__container">
      <button 
        onClick={logOut}
        className="btn--logout"
      >
        Log out
      </button>
      <p className="Profile__header">My profile</p>
      {user.user 
        && <h1 className="Profile__greeting">Hello, {user.user?.first_name}</h1>
      }
      {user.user?.team_name 
        && <p className="Profile__team">Team {user.user.team_name}</p>
      }
      {user.user?.team_name === null 
        && <p className="Profile__noteam">You are not assigned to a team. Please join a team or create a new team.</p>
      }
      <JoinTeam teams={teams} />
      {(user.user?.team_name == null) && <CreateTeam />}
      {(templates?.length > 0 && user.user?.templates?.length === 0) && 
      <div className="Profile__TemplateCardsContainer">
        <p className="Profile__TemplateCardsContainer--header">
          Please choose a retro template for your team
        </p>
        {templates.map(item => (<TemplateCard template={item} key={item.name} />))}
      </div>
      }
      {chosenFormData && <TemplateCard template={chosenFormData} />}
    </div>
  )
}

export default Profile
