import './Notifications.css'

const Notifications = ({notifications}) => {
    if(notifications === null) {
        return null
    }

    return (
        <div className={notifications.includes('Information') || notifications.includes('validation failed:') ? "notificationsError" : "notifications" }>
            {notifications}
        </div>
    )
}

export default Notifications