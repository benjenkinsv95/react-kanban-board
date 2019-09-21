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

const KanbanCard = ({id, listTitle, title, text, cards, setCards, leftCards, setLeftCards, rightCards, setRightCards}) => {
    const moveLeft = () => {
        const existingCard = cards.find(card => card.id === id)
        const newCards = cards.filter(card => card.id !== id)
        setCards(newCards)
        setLeftCards([...leftCards, existingCard])
    }
    const moveRight = () => {
        const existingCard = cards.find(card => card.id === id)
        const newCards = cards.filter(card => card.id !== id)
        setCards(newCards)
        setRightCards([...rightCards, existingCard])
    }
    const removeCard = () => {
        const newCards = cards.filter(card => card.id !== id)
        setCards(newCards)
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
                        {leftCards && <Button size="small"><ChevronLeftIcon onClick={moveLeft}/></Button>}
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid item xs>
                        {rightCards && <Button size="small"><ChevronRightIcon onClick={moveRight}/></Button>}
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default KanbanCard
