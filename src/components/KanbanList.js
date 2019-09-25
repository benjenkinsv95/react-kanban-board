import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import React, {useState} from 'react'

import uuidv4 from 'uuid/v4'
import {saveCards} from '../lib/card-persistence'
import KanbanCard from './KanbanCard'
import './KanbanList.css'

const KanbanList = ({kanbanList, leftKanbanList, rightKanbanList}) => {
    const [newTitle, setNewTitle] = useState('')
    const [newText, setNewText] = useState('')


    const cardsJsx = kanbanList.cards.map(({title, id, text}) => (
        <KanbanCard
            id={id}
            key={id}
            title={title}
            text={text}
            kanbanList={kanbanList}
            leftKanbanList={leftKanbanList}
            rightKanbanList={rightKanbanList}
        />
    ))

    const handleClick = () => {
        const newCard = {id: uuidv4(), title: newTitle, text: newText}
        const newCards = [...kanbanList.cards, newCard]
        kanbanList.setCards(newCards)
        saveCards(kanbanList.name, newCards)
        setNewTitle('')
        setNewText('')
    }

    const handleChange = event => {
        setNewTitle(event.target.value)
    }

    return (
        <div className='kanban-list' style={{width: '100%'}}>
            <div style={{paddingBottom: 8, backgroundColor: 'white'}}>
                <div style={{
                    backgroundColor: kanbanList.titleBackgroundColor,
                    height: 50,
                    color: 'white',
                    fontSize: 40,
                    textAlign: 'center',
                    boxShadow: '0px 4px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
                    zIndex: 1100
                }}>
                    {kanbanList.name}
                </div>
            </div>
            {cardsJsx}

            <div style={{backgroundColor: 'white', paddingLeft: 8, paddingRight: 8}}>
                <div style={{
                    color: kanbanList.titleBackgroundColor,
                    height: 30,
                    backgroundColor: 'white',
                    fontSize: 24,
                    textAlign: 'center',
                    zIndex: 1100,
                    width: '100%',
                    textDecoration: 'none',
                    textShadow: '1px 1px 0 #fff, -1px 1px 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff',
                    boxShadow: `inset 0 -1px 0 0 #fff, inset 0 -3px 0 0 ${kanbanList.titleBackgroundColor}`
                }}>
                    Add Card
                </div>
                <TextField
                    label="Card Title"
                    placeholder="My amazing task!"
                    margin="normal"
                    onChange={handleChange}
                    value={newTitle}
                    fullWidth
                    required
                />
                <TextField
                    label="Card Details"
                    placeholder="This task requires..."
                    margin="normal"
                    onChange={e => setNewText(e.target.value)}
                    value={newText}
                    fullWidth
                    required
                />

                <div style={{display: 'flex'}}>
                    <Button
                        style={{
                            marginLeft: 'auto',
                            marginRight: 8,
                            marginBottom: 8,
                            backgroundColor: kanbanList.titleBackgroundColor,
                            color: 'white'
                        }}
                        onClick={handleClick}
                        variant="contained"
                        size="medium"
                    >
                        Add
                    </Button>
                </div>
            </div>


        </div>
    )
}

export default KanbanList
