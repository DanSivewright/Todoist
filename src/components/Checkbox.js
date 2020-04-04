import React from 'react'
import { firebase } from '../firebase'

export const Checkbox = ({ id }) => {
    const archiveTask = () => {
        firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .update({
                archived: true,
            })
    }
    return (
        <div>
            <div onClick={() => archiveTask()} className="checkbox-holder" data-testid="checkbox-action">
                <span className="checkbox"></span>
            </div>
        </div>
    )
}
