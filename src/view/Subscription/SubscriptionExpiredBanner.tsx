import { Alert } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";
import { useUserStore } from "../../store/userStore";

export function SubscriptionExpiredBanner() {
  const expired = useUserStore((s) => s.user?.subscription_expired === true);
  if (!expired) return null;
  return (
    <Alert
      color="red"
      variant="light"
      radius={0}
      icon={<IconAlertTriangle size={16} />}
      role="alert"
    >
      Your subscription has expired. You can still view your data, but changes are blocked until it is renewed.
    </Alert>
  );
}