import { GoogleSpreadsheet } from "google-spreadsheet";

export interface Incident {
  id: string;
  date: Date;
  description: string;
  deaths?: number;
  injuries?: number;
  arrests?: number;
  tags?: [string];
  stateInvolvement?: [string];
  location?: string;
  coordinates?: [number, number];
  province?: string;
  violations?: [string];
  source?: string;
  notes?: string;
}

export async function getIncidentDataset(): Promise<Incident[]> {
  const doc = new GoogleSpreadsheet(process.env.NEXT_GOOGLE_SHEET_ID);
  await doc.useServiceAccountAuth({
    client_email: process.env.NEXT_GOOGLE_SERVICE_ACCOUNT_EMAIL || "",
    private_key: (process.env.NEXT_GOOGLE_PRIVATE_KEY || "").replace(
      /\\n/g,
      "\n"
    ),
  });
  await doc.loadInfo();
  const masterRecords = doc.sheetsByTitle["Incidents"];
  const masterRows = await masterRecords.getRows();
  const normalisedRows = masterRows
    .filter((i) => i["ID"] && i["Date"])
    .map((i) => {
      const cords = i["Location - Coordinates"]
        .split(",")
        .map((l: string) => parseFloat(l.trim()));
      return {
        id: i["ID"],
        date: i["Date"],
        description: i["Incident Description"],
        deaths: Number.parseInt(i["Deaths"]),
        injuries: Number.parseInt(i["Injuries"]),
        arrests: Number.parseInt(i["Arrests"]),
        tags: i["Tags"].split(",").map((i: string) => i.trim()),
        stateInvolvement: i["State Involvement"]
          .split(",")
          .map((i: string) => i.trim()),
        location: i["Location"],
        coordinates: [cords[0], cords[1]],
        violations: i["HR Violations"].split(",").map((i: string) => i.trim()),
        source: i["Source"],
        Notes: i["Notes"],
      } as Incident;
    });
  return normalisedRows;
  //   return masterRows
  //     .filter((i) => i["LatLng (approx)"] && i["Protest_ID"] && i["Date"])
  //     .map((i) => {
  //       const cords = i["LatLng (approx)"]
  //         .split(",")
  //         .map((l: string) => parseFloat(l.trim()));
  //       return {
  //         id: i["Protest_ID"],
  //         lat: cords[0],
  //         lng: cords[1],
  //         location: i["Location"],
  //         date: i["Date"] ? DateTime.fromFormat(i["Date"], "d/M/y") : null,
  //         notes: i["Notes on protest - @yudhanjaya"] || undefined,
  //         links: extractLinks(
  //           i["Footage (links, add multiple if possible)"] || ""
  //         ),
  //         size: mapPointSize(
  //           i["Size assessment (small-medium-large-XL, large being Mirihana)"] ||
  //             ""
  //         ),
  //         sizeValue: mapPointSizeToValue(
  //           i["Size assessment (small-medium-large-XL, large being Mirihana)"] ||
  //             ""
  //         ),
  //         footageNotes: i["Footage notes"],
  //         archiveLink: i["Archive link (edit access limited)"],
  //         accurate:
  //           i["Location"].trim().charAt(i["Location"].trim().length - 1) !== "*",
  //         // footageContrib: i["Footage contrib"]?.split(","),
  //       };
  //     })
  //     .filter((i) => i.lat != null && i.lng != null)
  //     .filter((i) => i.date !== null)
  //     .sort((a, b) => a.date.toUnixInteger() - b.date.toUnixInteger());
}
