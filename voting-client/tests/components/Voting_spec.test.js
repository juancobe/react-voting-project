import React from 'react';
import ReactDOM from 'react-dom';
import Voting from '../../src/components/Voting';
import { mount, render } from 'enzyme';
import {List} from 'immutable';

//testing the Voting component
//expect is from jest, mount is from enzyme. So what is inside the parenthesis of expect is enzyme and the rest is jest. 

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

//supposedly, if we pass an array as props for the component and then update the values of the array and re-render, the component should NOT change since it's a pure component... but I don't really understand why. A: Supposedly pure components should not be doing deep checks of the state of their props and only re-render when there's a NEW (as in literally different) object passed on its props. That's why you work with immutable objects, because you're literally always passing a new object.  
it('renders as a pure component', () => {
	const pair = ['Trainspotting', '28 Days Later'];
	let votingComponent = mount(
		<Voting pair={pair} />
	);

  expect(votingComponent.find('button').at(0).text()).toBe('Trainspotting');

	pair[0] = 'Sunshine';
  votingComponent.setProps({pair: pair});

  expect(votingComponent.find('button').at(0).text()).toBe('Trainspotting');
})

it('does update DOM when prop changes', () => {
	const pair = List.of('Trainspotting', '28 Days Later');
	let votingComponent = mount(
		<Voting pair={pair} />
	);

  expect(votingComponent.find('button').at(0).text()).toBe('Trainspotting');
  const newPair = pair.set(0, 'Sunshine');

  votingComponent.setProps({pair: newPair});


})