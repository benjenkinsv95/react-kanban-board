import Grid from '@material-ui/core/Grid'
import React, {Fragment, useState} from 'react'
import 'typeface-roboto'

import uuidv4 from 'uuid/v4'
import './App.css'
import KanbanAppBar from './components/KanbanAppBar'
import KanbanList from './components/KanbanList'
import {saveCards} from './lib/card-persistence'

function App() {
    const listName = 'Todo'
    const listName2 = 'Doing'
    const listName3 = 'Reviewing'
    const listName4 = 'Done'
    const loadCards = (name) => {
        const defaultCards = [
            {id: uuidv4(), title: 'An amazing feature', text: 'This feature is super amazing because of reasons.'},
            {id: uuidv4(), title: 'Very important stuff', text: 'This feature is super amazing because of reasons.'}
        ]

        const json = localStorage.getItem(name) || JSON.stringify({cards: defaultCards})
        console.log(json)
        return JSON.parse(json).cards
    }

    const useCards = listName => {
        const [cards, setCardsPlain] = useState(loadCards(listName))
        const setCards = newCards => {
            setCardsPlain(newCards)
            saveCards(listName, newCards)
        }
        return [cards, setCards]
    }

    const [cards, setCards] = useCards(listName)
    const [cards2, setCards2] = useCards(listName2)
    const [cards3, setCards3] = useCards(listName3)
    const [cards4, setCards4] = useCards(listName4)

    // #8e6e95 #39a59c #344759 #e8741e
    return (
        <Fragment>
            <KanbanAppBar/>

            <div className='kanban'>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <KanbanList
                            name={listName}
                            titleBackgroundColor="#8e6e95"
                            cards={cards} setCards={setCards}
                            rightCards={cards2} setRightCards={setCards2}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <KanbanList
                            name={listName2}
                            titleBackgroundColor="#39a59c"
                            cards={cards2} setCards={setCards2}
                            rightCards={cards3} setRightCards={setCards3}
                            leftCards={cards} setLeftCards={setCards}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}  lg={3}>
                        <KanbanList
                            name={listName3}
                            titleBackgroundColor="#344759"
                            cards={cards3} setCards={setCards3}
                            rightCards={cards4} setRightCards={setCards4}
                            leftCards={cards2} setLeftCards={setCards2}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <KanbanList
                            name={listName4}
                            titleBackgroundColor="#e8741e"
                            cards={cards4} setCards={setCards4}
                            leftCards={cards3} setLeftCards={setCards3}

                        />
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default App
