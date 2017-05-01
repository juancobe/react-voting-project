import React from 'react';
import ReactDOM from 'react-dom';
import Voting from '../../src/components/Voting';
import { mount } from 'enzyme';

//testing the Voting component

it('renders Voting component as two buttons with no errors', () => {
	const votingComponent = <Voting pair={['Trainspotting', '28 Days Later']} />;

  expect(mount(votingComponent).find('button').length).toBe(2);
  expect(mount(votingComponent).find('button').at(0).text()).toBe('Trainspotting');
  expect(mount(votingComponent).find('button').at(1).text()).toBe('28 Days Later');
})