import Grid from '@material-ui/core/Grid'
import React, {Fragment, useState} from 'react'
import 'typeface-roboto'

import uuidv4 from 'uuid/v4'
import './App.css'
import KanbanAppBar from './components/KanbanAppBar'
import KanbanList from './components/KanbanList'
import {saveCards} from './lib/card-persistence'



function App() {


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

    const useKanbanList = (name, titleBackgroundColor) => {
        const [cards, setCards] = useCards(name)

        return {
            name,
            titleBackgroundColor,
            cards,
            setCards
        }
    }

    const kanbanLists = [
         useKanbanList('Todo', '#8e6e95'),
         useKanbanList('Doing', "#39a59c"),
         useKanbanList('Reviewing', "#344759"),
         useKanbanList('Done', "#e8741e")
    ]

    const kanbanListsJsx = kanbanLists.map((kanbanList, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <KanbanList
                kanbanList={kanbanList}
                leftKanbanList={i >= 1 ? kanbanLists[i - 1] : undefined}
                rightKanbanList={i < kanbanLists.length - 1 ? kanbanLists[i + 1] : undefined}
            />
        </Grid>
    ))

    // #8e6e95 #39a59c #344759 #e8741e
    return (
        <Fragment>
            <KanbanAppBar/>
            <div className='kanban'>
                <Grid container spacing={3}>
                    {kanbanListsJsx}
                </Grid>
            </div>
        </Fragment>
    )
}

export default App
