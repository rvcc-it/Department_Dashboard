interface StatusBadgeProps {
  status: "critical" | "good" | "low";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusClasses = {
    critical: "status-critical",
    good: "status-good",
    low: "status-low",
  };

  const statusLabels = {
    critical: "Critical",
    good: "Good",
    low: "Low",
  };

  return (
    <span className={`status-badge ${statusClasses[status]}`}>
      {statusLabels[status]}
    </span>
  );
}
