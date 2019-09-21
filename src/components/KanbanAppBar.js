import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import './KanbanAppBar.css'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1
        }
    })
)

export default function KanbanAppBar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundImage: 'url(\'/background.png\')'}}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {'Simple Kanban Board by '}
                        <Link style={{color: '#e8741e'}} href='http://www.ben-jenkins.com'>
                            Ben Jenkins
                        </Link>
                    </Typography>
                    <Link style={{color: 'white'}} href='https://github.com/benjenkinsv95'>
                        <Button color="inherit"><i className="devicon-github-plain-wordmark navbar-icon"/></Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}