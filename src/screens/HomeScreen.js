import React from 'react'
import './HomeScreen.css';
import Nav from '../Nav.js';
import Row from '../Row.js';
import Banner from '../Banner.js';
import requests from '../Request';

function HomeScreen() {
    return (
        <div className="homescreen">
            <Nav />

            <Banner />

            <Row 
                title='Netflix Originals'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row 
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}
            />
            <Row 
                title='Action Movies '
                fetchUrl={requests.fetchActionMovies}
            />
            <Row 
                title=' Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
                title='Horror Movies '
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row 
                title='Romance Movies '
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row 
                title=' Documentaries'
                fetchUrl={requests.fetchDocumentaries}
            />

        
        </div>
    )
}

export default HomeScreen
