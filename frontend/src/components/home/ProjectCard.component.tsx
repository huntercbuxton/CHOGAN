import {useEffect, useState} from 'react';
import {Card, CardDeck} from 'react-bootstrap';
import ProjectElipsisBtn from './modal/ProjectElipsisBtn';
import { useHistory } from "react-router-dom";

export default function ProjectCard(props:any) {
  const [renderCard, setRenderCard] = useState([]);
  const history = useHistory();
  useEffect(() => {
    setRenderCard(props.projects)
  }, [props.projects]);

  const goToProject = () => {
    history.push("/user/project/general");    
  };   

  return (
    <>
      {renderCard.map((project:any) => (
        <span key={project.id}  className="card-container-wrapper" >
          <CardDeck className="card-project-wrapper" style={{display: 'inline-flex', flexDirection: 'row' }} onClick={goToProject}>
            <Card style={{ width: '18rem', flex: 1}} className="card-project">
              <Card.Body>
                <Card.Title>{project.projectName}</Card.Title>
                <Card.Text>
                  <span className="proj-card-des">{project.projectDescription}</span>
                </Card.Text >
                
              </Card.Body>
              <Card.Footer className="text-right">
                {/* <div className="text-left">
                  {project.tags.slice(0,4).map((t:any, index: number) => (
                      <span key={index} className="proj-card-wrapper-tags">
                        <span className="proj-card-tags">
                          {t}
                        </span>
                      </span>
                    ))}
                </div> */}
                <span><ProjectElipsisBtn/></span>
              </Card.Footer>
            </Card>
          </CardDeck>
        </span>
      ))}
    </>
  );
}

