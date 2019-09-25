import {Card} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import React from 'react'
import './KanbanCard.css'

const KanbanCard = ({id, title, text, kanbanList, leftKanbanList, rightKanbanList}) => {
    const moveLeft = () => {
        const existingCard = kanbanList.cards.find(card => card.id === id)
        const newCards = kanbanList.cards.filter(card => card.id !== id)
        kanbanList.setCards(newCards)
        leftKanbanList.setCards([...leftKanbanList.cards, existingCard])
    }
    const moveRight = () => {
        const existingCard = kanbanList.cards.find(card => card.id === id)
        const newCards = kanbanList.cards.filter(card => card.id !== id)
        kanbanList.setCards(newCards)
        rightKanbanList.setCards([...rightKanbanList.cards, existingCard])
    }
    const removeCard = () => {
        const newCards = kanbanList.cards.filter(card => card.id !== id)
        kanbanList.setCards(newCards)
    }
    return (
        <Card className='card'>
            <CardHeader
                action={
                    <Typography onClick={removeCard} color="textSecondary">
                        <i className="material-icons" style={{textAlign: 'right', marginRight: 8, marginTop: 8}}>
                            close
                        </i>
                    </Typography>
                }
                title={
                    <Typography color="textSecondary" style={{marginLeft: 24}}>
                        {title}
                    </Typography>
                }
            />
            <CardContent style={{paddingTop: 0, paddingBottom: 0}}>
                <Typography variant="body2" component="p">
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container spacing={1}>
                    <Grid item xs>
                        {leftKanbanList && <Button size="small"><ChevronLeftIcon onClick={moveLeft}/></Button>}
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid item xs>
                        {rightKanbanList && <Button size="small"><ChevronRightIcon onClick={moveRight}/></Button>}
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default KanbanCard
