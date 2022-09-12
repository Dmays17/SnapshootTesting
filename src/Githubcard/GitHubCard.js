import React from 'react'
import Card from 'react-bootstrap/Card'

function GitHubCard(){
    return (
        <div className="card">
          <Card style={{ width: "18rem"}}>
          {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
          <Card.Img variant="top" src={'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F2%2F26%2FPaul_Rudish_Mickey_Mouse.png%2F220px-Paul_Rudish_Mickey_Mouse.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMickey_Mouse&tbnid=kUN9SDSs5ZY8MM&vet=12ahUKEwiW0czImJD6AhVgFlkFHWSxATsQMygCegUIARCUAw..i&docid=o8fKNZd6urBFOM&w=220&h=236&q=mickey%20mouse&ved=2ahUKEwiW0czImJD6AhVgFlkFHWSxATsQMygCegUIARCUAw'} />
          {/* Source: https://en.wikipedia.org/wiki/Mickey_Mouse */}
          <Card.Body>
              <Card.Title>Mickey Mouse</Card.Title>
              <Card.Text>
              I am a cartoon character and am one of the world's most recognizable fictional characters.
              </Card.Text>
          </Card.Body>
          </Card>
        </div>
    );
  }
    export default GitHubCard