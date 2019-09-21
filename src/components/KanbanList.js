import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import React, {useState} from 'react'

import uuidv4 from 'uuid/v4'
import {saveCards} from '../lib/card-persistence'
import KanbanCard from './KanbanCard'
import './KanbanList.css'

const KanbanList = ({name, titleBackgroundColor, cards, setCards, leftCards, setLeftCards, rightCards, setRightCards}) => {
    const [newItem, setNewItem] = useState('')


    const cardsJsx = cards.map(({title, id, text}) => (
        <KanbanCard
            id={id}
            key={id}
            title={title}
            text={text}
            cards={cards}
            setCards={setCards}
            leftCards={leftCards}
            setLeftCards={setLeftCards}
            rightCards={rightCards}
            setRightCards={setRightCards}

        />
    ))
    // const cardsJsx = cards.map(({title, id}) => (
    //     <div key={id}>{title}</div>
    // ))
    const handleClick = () => {
        const newCard = {id: uuidv4(), title: newItem}
        const newCards = [...cards, newCard]
        setCards(newCards)
        saveCards(name, newCards)
        setNewItem('')
    }

    const handleChange = event => {
        setNewItem(event.target.value)
    }

    return (
        <div className='kanban-list' style={{width: '100%'}}>
            <div style={{paddingBottom: 8, backgroundColor: 'white'}}>
                <div style={{
                    backgroundColor: titleBackgroundColor,
                    height: 50,
                    color: 'white',
                    fontSize: 40,
                    textAlign: 'center',
                    boxShadow: '0px 4px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
                    zIndex: 1100
                }}>
                    {name}
                </div>
            </div>
            {cardsJsx}

            <div style={{backgroundColor: 'white'}}>
                <div style={{marginLeft: 8, marginRight: 8}}>
                    <TextField
                        id="standard-with-placeholder"
                        label="New Card"
                        placeholder="Enter new card"
                        margin="normal"
                        onChange={handleChange}
                        value={newItem}
                        fullWidth
                    />
                </div>

                <div style={{display: 'flex'}}>
                    <Button
                        style={{
                            marginLeft: 'auto',
                            marginRight: 8,
                            marginBottom: 8,
                            backgroundColor: titleBackgroundColor,
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
