import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { AddCar, NavBar, NewCarsCollection } from './ui-components';
import { DataStore } from '@aws-amplify/datastore';
import { withAuthenticator, Divider } from '@aws-amplify/ui-react';
import { RentalCar } from './models';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App({user, signOut}) {

    const [makeModel, setMakeModel] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const saveRentalCar = async () => {
        try {
            await DataStore.save(
                new RentalCar({
                    makeModel: makeModel,
                    price: parseFloat(price),
                    description: description,
                    imageUrl: imageUrl
                })
            );
        } catch(err) {
            console.log(err);
        }
    }

    const addCarOverrides = {
        'TextField29766922': {
            onChange: (event) => {
                setMakeModel(event.target.value);
            }
        },
        'TextField29766923': {
            onChange: (event) => {
                setPrice(event.target.value);
            }
        },
        'TextField29766924': {
            onChange: (event) => {
                setDescription(event.target.value);
            }
        },
        'TextField31492673': {
            onChange: (event) => {
                setImageUrl(event.target.value);
            }
        },
        'Button': {
            onClick: saveRentalCar
        }
    }

    const navbarOverrides = {
        'car 1': {
            src: 'https://img.icons8.com/color/50/000000/car--v1.png'
        },
        'image': {
            src: 'https://lh3.googleusercontent.com/a-/AFdZucqNM4GqpkwKuaPrd6RQa6-nZwGcrKmgx8hD3pG1OA=s192-c-rg-br100'
            // For specific user profile icon img
            // 'user?.attributes?.profile'
        },
        'Button' : {
            onClick: signOut
        }
    }

    return (
        <div className="App">
            <NavBar overrides={navbarOverrides} />
            <header className="App-header">
                <AddCar overrides={addCarOverrides} style={{textAlign: "left", margin: "1rem"}} />
                <Divider />
                <NewCarsCollection />
            </header>
        </div>
    );
}

export default withAuthenticator(App);