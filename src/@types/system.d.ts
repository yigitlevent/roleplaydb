namespace rdb {

	namespace row {

		interface SystemWithoutID {
			name: string;
			is_generic: boolean;
			unusual_accessories: boolean;
			conflict: rdb.generic.Conflict;
			c_advancement: rdb.generic.Advancement;
			c_creation: rdb.generic.Creation;
			c_equipment: rdb.generic.Equipment;
			c_levels: rdb.generic.Levels;
			c_sheet: rdb.generic.Basic;
			r_combat: rdb.generic.Basic;
			r_construction: rdb.generic.Basic;
			r_crafting: rdb.generic.Basic;
			r_downtime: rdb.generic.Basic;
			r_faction: rdb.generic.Basic;
			r_social: rdb.generic.Basic;
			r_travel: rdb.generic.Basic;
			r_warfare: rdb.generic.Basic;
		}

		interface System extends SystemWithoutID {
			id: number;
		}

	}

}
