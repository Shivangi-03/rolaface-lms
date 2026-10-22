import { Paper, Table, Text, Loader } from "@mantine/core";
import { serif } from "../SharedUI";

/** Loan Booking Charges (the Loan's loan_charges table from get_loan_by_id). */
export function ChargesTab({ data, loading, renderCurrency }: any) {
  const charges: any[] = data?.loan_charges ?? [];

  if (loading && !data) {
    return (
      <Paper radius="lg" p="xl" style={{ border: '1px solid var(--mantine-color-slate-2)' }} className="flex justify-center">
        <Loader size="sm" color="slate" />
      </Paper>
    );
  }

  return (
    <Paper
      radius="lg"
      className="overflow-hidden flex flex-col"
      style={{
        border: '1px solid var(--mantine-color-slate-2)',
        boxShadow: 'var(--mantine-shadow-sm)',
        minWidth: 0,
        width: '100%',
      }}
    >
      <div className="flex justify-between items-center px-4 py-3 border-b border-[var(--mantine-color-slate-1)]">
        <Text fz="lg" fw={600} c="slate.9" style={serif}>Loan Booking Charges</Text>
      </div>

      <div style={{ width: '100%', minWidth: 0, overflow: 'hidden' }}>
        <Table
          verticalSpacing="sm"
          horizontalSpacing="sm"
          highlightOnHover
          style={{ tableLayout: 'fixed', width: '100%' }}
        >
          <Table.Thead>
            <Table.Tr>
              {[
                ['CHARGE', '28%', 'left'],
                ['AMOUNT', '18%', 'right'],
                ['ACCOUNT', '30%', 'left'],
                ['TREATMENT OF CHARGE', '24%', 'left'],
              ].map(([label, w, align]) => (
                <Table.Th
                  key={label}
                  ta={align as any}
                  style={{ width: w, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                  {label}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {charges.map((c: any) => (
              <Table.Tr key={c.name}>
                <Table.Td style={{ wordBreak: 'break-word' }}>{c.charge || "—"}</Table.Td>
                <Table.Td ta="right" className="font-mono">{renderCurrency(c.amount)}</Table.Td>
                <Table.Td style={{ wordBreak: 'break-word' }}>{c.account || "—"}</Table.Td>
                <Table.Td style={{ wordBreak: 'break-word' }}>{c.treatment_of_charge || "—"}</Table.Td>
              </Table.Tr>
            ))}
            {charges.length === 0 && (
              <Table.Tr>
                <Table.Td colSpan={4} className="text-center py-4 text-xs text-[var(--mantine-color-slate-5)]">
                  No charges on this loan.
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </div>
    </Paper>
  );
}
