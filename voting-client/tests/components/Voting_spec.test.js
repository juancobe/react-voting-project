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

it('invokes a callback when a button is clicked', () => {
	var votedWith;
	const vote = (entry) => votedWith = entry;

	const votingComponent = mount(<Voting pair={['Trainspotting', '28 Days Later']} vote={vote} />);
	votingComponent.find('button').at(0).simulate('click');

	expect(votedWith).toBe('Trainspotting');
})

it('disables buttons and adds -voted- label when the user has voted', () => {
	const votingComponent = mount(
		<Voting pair={['Trainspotting', '28 Days Later']} 
						hasVoted={"Trainspotting"} />
	);

  expect(votingComponent.find('button').length).toBe(2);
  expect(votingComponent.find('button').at(0).find('.label').text()).toBe('Voted');
  expect(votingComponent.find('button').at(0).getDOMNode().hasAttribute('disabled')).toBe(true);
  expect(votingComponent.find('button').at(1).getDOMNode().hasAttribute('disabled')).toBe(true);
})

it('renders just the winner when there is one', () => {
	const component = mount(
		<Voting winner="Trainspotting" />
	);

	const winner = component.ref('winner');
	expect(winner.text()).toBe('Winner is Trainspotting!');
})