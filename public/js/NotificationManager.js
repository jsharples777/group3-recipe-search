import BulmaNotification from "./Notifications.js";

class NotificationManager {
    constructor() {
        this.notifications = [];
        this.currentCount = 0;
        this.offsetPerNotification = 100;
        this.containerId = "notifications";
    }

    getContainerId() {
        return this.containerId;
    }

    show(title, message, context = "info", duration = 3000) {
        let notification = new BulmaNotification(this);
        let notificationNode = notification.show(title,message,this.currentCount*this.offsetPerNotification,context,duration);
        this.currentCount++;
        this.notifications.push(notificationNode);
    }

    remove(notificationNode) {
        let parentEl = notificationNode.parentElement;
        parentEl.removeChild(notificationNode);
        this.currentCount--;
    }
}

let notifier = new NotificationManager();

export default notifier;