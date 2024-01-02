import React from 'react'
import style from './LoadingScreen.module.css'
export default function LoadingScreen() {
    return (
            <div className={style.loadingScreen}>
                <div className={style.loadingSpinner}></div>
            </div>
    )
}
