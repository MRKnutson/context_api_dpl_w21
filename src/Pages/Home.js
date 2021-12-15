// import React from 'react'
// import { Container } from 'semantic-ui-react';

// const Home = () => {
//   return(
//     <Container>
//       <h1>Welcome to the Party!</h1>
//     </Container>
//   )
// };

// export default Home;

import React, { Component } from 'react'
import { Container, Form, Grid, Icon, Image, Transition } from 'semantic-ui-react'

// const Home = () => {
  const transitions = [
    'jiggle',
    'flash',
    'shake',
    'pulse',
    'tada',
    'bounce',
    'glow',
  ]

  const options = transitions.map((name) => ({
    key: name,
    text: name,
    value: name,
  }))

  class Home extends Component {
    state = { animation: transitions[0], duration: 500, visible: true }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })
    toggleVisibility = () =>
      this.setState((prevState) => ({ visible: !prevState.visible }))

    render() {
      const { animation, duration, visible } = this.state

      return (
        <Container>
          {/* <h1>Welcome to the Partyyyyy!!!</h1> */}
        <Grid columns={1}>
          <Grid.Column>
            <Transition
              animation={animation}
              duration={duration}
              visible={visible}
            >
              <h1 className="home">Welcome to the Partyyyyy!!!</h1>
            </Transition>
            <Transition
              animation={animation}
              duration={duration}
              visible={visible}
            >
              <Image centered size='small' src='https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77351/confetti-clipart-xl.png' />
            </Transition>
          </Grid.Column>
          <br />
          <Grid.Column as={Form}>
            <Form.Select
              label='Choose transition'
              name='animation'
              onChange={this.handleChange}
              options={options}
              value={animation}
            />
            <Form.Input
              label={`Duration: ${duration}ms `}
              min={100}
              max={2000}
              name='duration'
              onChange={this.handleChange}
              step={100}
              type='range'
              value={duration}
            />
            <Form.Button color = "green" icon onClick={this.toggleVisibility}>
              <Icon name="paper plane outline" />
              &nbsp; Run
              </Form.Button>
          </Grid.Column>

          
        </Grid>
        </Container>
      )
    }
  }


export default Home;