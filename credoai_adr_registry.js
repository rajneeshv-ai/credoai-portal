// credoai_adr_registry.js
// Single source of truth for ALL ADR references across the portal
// Import this file in every HTML page that mentions ADRs

const ADR = {
  // Phase 1 MVP (Polyglot Governance Foundation)
  '001': { id: 'ADR-001', title: 'Zero-Trust OPA Governance',     status: 'Accepted', date: '2026-03' },
  '002': { id: 'ADR-002', title: 'Transactional Outbox Pattern',  status: 'Accepted', date: '2026-03' },
  '003': { id: 'ADR-003', title: 'gRPC Polyglot Boundary',         status: 'Accepted', date: '2026-03' },
  '004': { id: 'ADR-004', title: 'LangGraph State Machine',        status: 'Accepted', date: '2026-03' },
  '005': { id: 'ADR-005', title: 'W3C Traceparent End-to-End',     status: 'Accepted', date: '2026-03' },
  '006': { id: 'ADR-006', title: 'Provider-Agnostic Inference',    status: 'Accepted', date: '2026-03' },
  '007': { id: 'ADR-007', title: 'Deterministic LLMOps (RAGAS)',   status: 'Accepted', date: '2026-04' },
  
  // Phase 2 Research Extension (Agentic GraphRAG Platform)
  '008': { id: 'ADR-008', title: 'MCP with OPA Sidecar',           status: 'Accepted', date: '2026-05' },
  '009': { id: 'ADR-009', title: '3-Agent Architecture (MACA)',    status: 'Draft',    date: '2026-06' },
  '010': { id: 'ADR-010', title: 'TSCS Temporal Decay',            status: 'Draft',    date: '2026-06' },
  '011': { id: 'ADR-011', title: 'RRAT Forensic Snapshot',         status: 'Draft',    date: '2026-07' }
};

// Helper — returns formatted string e.g. "ADR-001: Zero-Trust OPA Governance"
function adrLabel(num) {
  const a = ADR[num];
  return a ? `${a.id}: ${a.title}` : `ADR-${num}: Unknown`;
}

// Helper — returns array of formatted labels from array of nums
// Usage: adrLabels(['001','004']) → ['ADR-001: Zero-Trust...', 'ADR-004: ...']
function adrLabels(nums) {
  return nums.map(adrLabel);
}