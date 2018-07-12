import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import Problems from './store/store';
import Dashboard from './components/dashboard'

const RootDiv = styled.div`
	background: #fafafa;
	display: flex;
`;

class App extends React.Component {
render() {
    return (
      <RootDiv>
      	<Dashboard />
      </RootDiv>
    );
  }
}
render(<App />, document.getElementById('app'));