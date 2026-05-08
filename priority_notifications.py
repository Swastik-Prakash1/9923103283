
---


from datetime import datetime
from typing import List, Dict, Any

TYPE_WEIGHTS = {
    "Placement": 100,
    "Result": 70,
    "Event": 40
}

def calculate_priority(notif: Dict[str, Any]) -> float:
    """Calculate priority score based on type and recency"""
    weight = TYPE_WEIGHTS.get(notif.get("type"), 30)
    
    try:
        ts = notif.get("timestamp")
        if isinstance(ts, str):
            # Handle ISO format
            dt = datetime.fromisoformat(ts.replace("Z", "+00:00"))
            hours_old = (datetime.now(dt.tzinfo) - dt).total_seconds() / 3600
            recency_score = max(5, 100 - (hours_old * 1.8))  # Faster decay
        else:
            recency_score = 50
    except:
        recency_score = 50
    
    return weight * recency_score

def get_priority_notifications(notifications: List[Dict], top_n: int = 10) -> List[Dict]:
    """Return top N priority notifications"""
    sorted_list = sorted(
        notifications,
        key=calculate_priority,
        reverse=True
    )
    return sorted_list[:top_n]