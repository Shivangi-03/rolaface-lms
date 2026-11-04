import { Alert } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";
import { useUserStore } from "../../store/userStore";

export function SubscriptionExpiredBanner() {
  const expired = useUserStore((s) => s.user?.subscription_expired === true);
  const navigate = useNavigate();
  if (!expired) return null;

  const goToSubscription = () => navigate({ to: "/settings/subscription" });

  return (
    <Alert
      variant="filled"
      color="red.8"
      radius={0}
      icon={<IconAlertTriangle size={16} />}
      role="alert"
      tabIndex={0}
      onClick={goToSubscription}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          goToSubscription();
        }
      }}
      style={{ cursor: "pointer" }}
    >
      Your subscription has expired. You can continue to view your data, but create, edit, and other operations are currently restricted. Please renew your subscription to restore full access. Your account will be logged out automatically 10 days after expiry.
    </Alert>
  );
}